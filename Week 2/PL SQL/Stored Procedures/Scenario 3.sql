SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE accounts9';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE accounts9 (
    acc_id    NUMBER PRIMARY KEY,
    acc_name  VARCHAR2(100),
    balance   NUMBER(10,2)
);

INSERT INTO accounts9 VALUES (1, 'Ravi', 10000);
INSERT INTO accounts9 VALUES (2, 'Anjali', 8000);
INSERT INTO accounts9 VALUES (3, 'Sameer', 12000);
COMMIT;

CREATE OR REPLACE PROCEDURE transfer_funds (
    p_from_id IN NUMBER,
    p_to_id   IN NUMBER,
    p_amount  IN NUMBER
) IS
    from_balance NUMBER;
BEGIN
    SELECT balance INTO from_balance
    FROM accounts9
    WHERE acc_id = p_from_id
    FOR UPDATE;

    IF from_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Not enough balance in account: ' || p_from_id);
        RETURN;
    END IF;

    UPDATE accounts9
    SET balance = balance - p_amount
    WHERE acc_id = p_from_id;

    UPDATE accounts9
    SET balance = balance + p_amount
    WHERE acc_id = p_to_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Transfer of ₹' || p_amount || ' from acc ' || p_from_id || ' to acc ' || p_to_id || ' successful.');
END;
/

BEGIN
    transfer_funds(1, 2, 3000);
    transfer_funds(2, 3, 10000);
END;
/

PROMPT Final Account Balances
SELECT * FROM accounts9;
