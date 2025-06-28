CREATE TABLE accounts1 (
    account_id   NUMBER PRIMARY KEY,
    account_name VARCHAR2(100),
    balance      NUMBER(10,2)
);

INSERT INTO accounts1 VALUES (101, 'Amit Sharma', 5000);
INSERT INTO accounts1 VALUES (102, 'Priya Verma', 3000);
INSERT INTO accounts1 VALUES (103, 'Rahul Mehra', 0);
COMMIT;

CREATE TABLE error_log1 (
    log_id     NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    log_time   TIMESTAMP DEFAULT SYSTIMESTAMP,
    message    VARCHAR2(4000)
);

CREATE OR REPLACE PROCEDURE SafeTransferFunds1 (
    p_from_account_id IN NUMBER,
    p_to_account_id   IN NUMBER,
    p_amount          IN NUMBER
) IS
    v_from_balance NUMBER;
BEGIN
    SELECT balance INTO v_from_balance
    FROM accounts1
    WHERE account_id = p_from_account_id
    FOR UPDATE;

    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in account ' || p_from_account_id);
    END IF;

    UPDATE accounts1
    SET balance = balance - p_amount
    WHERE account_id = p_from_account_id;

    UPDATE accounts1
    SET balance = balance + p_amount
    WHERE account_id = p_to_account_id;

    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        INSERT INTO error_log1(message)
        VALUES('Transfer failed ' || p_from_account_id || 
               ' to account ' || p_to_account_id || 
               ' for amount ₹' || p_amount || '. Error: ' || SQLERRM);
        ROLLBACK;
END;
/




