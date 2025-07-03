CONNECT system/Varshin26;

SELECT USER FROM DUAL;
SELECT table_name FROM user_tables WHERE table_name = 'CUSTOMERS';

CREATE TABLE customers2 (
    customer_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    age             NUMBER,
    loan_interest   NUMBER(5,2)
);

INSERT INTO customers2 VALUES (1, 'John Smith', 65, 8.50);
INSERT INTO customers2 VALUES (2, 'Mary Johnson', 45, 7.00);
INSERT INTO customers2 VALUES (3, 'Robert Brown', 70, 9.20);
INSERT INTO customers2 VALUES (4, 'Lucy Davis', 61, 7.75);
INSERT INTO customers2 VALUES (5, 'Tom Wilson', 55, 8.00);
COMMIT;

SET SERVEROUTPUT ON;

BEGIN
    FOR cust IN (SELECT customer_id, age FROM customers2) LOOP
        IF cust.age > 60 THEN
            UPDATE customers
            SET loan_interest = loan_interest - 1
            WHERE customer_id = cust.customer_id;
        END IF;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('The output tableee');
    FOR rec IN (SELECT * FROM customers2 ORDER BY customer_id) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'ID: ' || rec.customer_id ||
            ' | Name: ' || rec.name ||
            ' | Age: ' || rec.age ||
            ' | Interest: ' || TO_CHAR(rec.loan_interest, '0.00')
        );
    END LOOP;

    COMMIT;
END;
/


