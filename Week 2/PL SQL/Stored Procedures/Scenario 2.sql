SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE employees8';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE employees8 (
    emp_id     NUMBER PRIMARY KEY,
    emp_name   VARCHAR2(100),
    dept       VARCHAR2(50),
    salary     NUMBER(10,2)
);

INSERT INTO employees8 VALUES (1, 'Ravi', 'HR', 40000);
INSERT INTO employees8 VALUES (2, 'Anjali', 'Sales', 45000);
INSERT INTO employees8 VALUES (3, 'Sameer', 'IT', 60000);
INSERT INTO employees8 VALUES (4, 'Neha', 'IT', 55000);
INSERT INTO employees8 VALUES (5, 'Kiran', 'Sales', 48000);
COMMIT;

CREATE OR REPLACE PROCEDURE update_bonus (
    p_dept IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE employees8
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE dept = p_dept;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || p_dept);
    COMMIT;
END;
/

BEGIN
    update_bonus('IT', 10);
END;
/

PROMPT Final Employee Salaries
SELECT * FROM employees8;
