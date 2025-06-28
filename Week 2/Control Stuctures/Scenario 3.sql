CREATE TABLE loan_customers (
    customer_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    loan_amount     NUMBER(10,2),
    due_date        DATE
);

INSERT INTO loan_customers VALUES (1, 'Varshin', 500000, SYSDATE + 10); --  10 days
INSERT INTO loan_customers VALUES (2, 'Abhinav', 300000, SYSDATE + 40); --  40 days
INSERT INTO loan_customers VALUES (3, 'Mayank', 250000, SYSDATE + 5);  --  5 days
INSERT INTO loan_customers VALUES (4, 'Sriram', 100000, SYSDATE + 31); --  31 days
INSERT INTO loan_customers VALUES (5, 'Karthik', 750000, SYSDATE + 29);--  29 days
COMMIT;

SET SERVEROUTPUT ON;

BEGIN
    DBMS_OUTPUT.PUT_LINE(' Loan Due ');
    
    FOR rec IN (
        SELECT name, loan_amount, due_date
        FROM loan_customers
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || rec.name ||
            ', your loan of ₹' || TO_CHAR(rec.loan_amount, '999999.99') ||
            ' is due on ' || TO_CHAR(rec.due_date, 'DD-Mon-YYYY') 
        );
    END LOOP;
END;
/

