SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE accounts7';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE accounts7 (
    acc_id     NUMBER PRIMARY KEY,
    acc_name   VARCHAR2(100),
    acc_type   VARCHAR2(20),
    balance    NUMBER(10,2)
);

INSERT INTO accounts7 VALUES (1, 'Ravi Kumar', 'savings', 10000);
INSERT INTO accounts7 VALUES (2, 'Anjali Mehta', 'current', 15000);
INSERT INTO accounts7 VALUES (3, 'Sameer Joshi', 'savings', 20000);
INSERT INTO accounts7 VALUES (4, 'Neha Singh', 'savings', 30000);
INSERT INTO accounts7 VALUES (5, 'Kiran Rao', 'current', 12000);
COMMIT;

CREATE OR REPLACE PROCEDURE process_interest IS
BEGIN
    UPDATE accounts7
    SET balance = balance + (balance * 0.01)
    WHERE acc_type = 'savings';

    DBMS_OUTPUT.PUT_LINE('Interest applied');
    COMMIT;
END;
/

BEGIN
    process_interest;
END;
/

PROMPT Final Account Balances
SELECT * FROM accounts7;
