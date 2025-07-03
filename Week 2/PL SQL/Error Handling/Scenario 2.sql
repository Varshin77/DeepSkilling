-- Enable output
SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE emp_master_custom';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE emp_master_custom (
    emp_id     NUMBER PRIMARY KEY,
    emp_name   VARCHAR2(100),
    salary     NUMBER(10,2)
);

INSERT INTO emp_master_custom VALUES (201, 'Amitabh Desai', 50000);
INSERT INTO emp_master_custom VALUES (202, 'Pankaj Nair', 60000);
INSERT INTO emp_master_custom VALUES (203, 'Ashrita Rao', 55000);
COMMIT;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE err_log_custom';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE err_log_custom (
    log_id    NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    log_time  TIMESTAMP DEFAULT SYSTIMESTAMP,
    message   VARCHAR2(4000)
);

CREATE OR REPLACE PROCEDURE update_emp_salary_proc (
    p_emp_id     IN NUMBER,
    p_percent    IN NUMBER
) IS
    v_error_msg VARCHAR2(4000);
BEGIN
    UPDATE emp_master_custom
    SET salary = salary + (salary * p_percent / 100)
    WHERE emp_id = p_emp_id;

    IF SQL%ROWCOUNT = 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Employee ID ' || p_emp_id || ' not found.');
    END IF;

    DBMS_OUTPUT.PUT_LINE('✅ Salary updated for employee ID: ' || p_emp_id);
    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        v_error_msg := '❌ Failed to update salary for employee ID ' || p_emp_id || 
                       '. Error: ' || SQLERRM;

        INSERT INTO err_log_custom(message) VALUES (v_error_msg);
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(v_error_msg);
END;
/

BEGIN
    update_emp_salary_proc(201, 10); -- Valid
    update_emp_salary_proc(999, 15); -- Invalid - does not exist
    update_emp_salary_proc(202, 5);  -- Valid
END;
/

PROMPT 
SELECT * FROM emp_master_custom;


PROMPT 
SELECT * FROM err_log_custom ORDER BY log_time DESC;
