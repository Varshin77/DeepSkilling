SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE customers3 (
    customer_id   NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    city          VARCHAR2(50)
);

INSERT INTO customers3 VALUES (1, 'Ravi Kumar', 'Delhi');
INSERT INTO customers3 VALUES (2, 'Anjali Mehta', 'Mumbai');
INSERT INTO customers3 VALUES (3, 'Sameer Joshi', 'Chennai');
COMMIT;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE error_log';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE error_log4 (
    log_id     NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    log_time   TIMESTAMP DEFAULT SYSTIMESTAMP,
    message    VARCHAR2(4000)
);

CREATE OR REPLACE PROCEDURE add_customer (
    p_id   IN NUMBER,
    p_name IN VARCHAR2,
    p_city IN VARCHAR2
) IS
    msg VARCHAR2(4000);
BEGIN
    INSERT INTO customers3 (customer_id, customer_name, city)
    VALUES (p_id, p_name, p_city);

    DBMS_OUTPUT.PUT_LINE('Customer added: ' || p_name);
    COMMIT;

EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        msg := 'Duplicate ID ' || p_id || ' for ' || p_name;
        INSERT INTO error_log4(message) VALUES (msg);
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(msg);

    WHEN OTHERS THEN
        msg := 'Error for ' || p_name || ': ' || SQLERRM;
        INSERT INTO error_log4(message) VALUES (msg);
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE(msg);
END;
/

BEGIN
    add_customer(4, 'Kiran Rao', 'Hyderabad');
    add_customer(2, 'Duplicate Anjali', 'Bangalore');
    add_customer(5, 'Neha Singh', 'Kolkata');
END;
/

PROMPT Final Customers Table
SELECT * FROM customers3;

PROMPT Error Log Table
SELECT * FROM error_log4 ORDER BY log_time DESC;
