CREATE TABLE customers_vip (
    customer_id     NUMBER PRIMARY KEY,
    name            VARCHAR2(100),
    balance         NUMBER(10,2),
    is_vip          CHAR(1) DEFAULT 'N' 
);

INSERT INTO customers_vip VALUES (1, 'Amit', 9500.00, 'N');
INSERT INTO customers_vip VALUES (2, 'Arya', 12500.75, 'N');
INSERT INTO customers_vip VALUES (3, 'Rahul', 10550.00, 'N');
INSERT INTO customers_vip VALUES (4, 'Reddy', 6800.50, 'N');
INSERT INTO customers_vip VALUES (5, 'Karthik', 21000.00, 'N');
INSERT INTO customers_vip VALUES (6, 'Neha', 9900.00, 'N');
INSERT INTO customers_vip VALUES (7, 'Varshin', 15200.00, 'N');
COMMIT;

SET SERVEROUTPUT ON;

BEGIN
    FOR cust IN (SELECT customer_id, balance FROM customers_vip) LOOP
        IF cust.balance > 10000 THEN
            UPDATE customers_vip
            SET is_vip = 'Y'
            WHERE customer_id = cust.customer_id;
        END IF;
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('VIP List');
    FOR rec IN (SELECT * FROM customers_vip ORDER BY customer_id) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'ID: ' || rec.customer_id ||
            ' | Name: ' || rec.name ||
            ' | Balance (INR): ₹' || TO_CHAR(rec.balance, '99999.99') ||
            ' | IsVIP: ' || rec.is_vip
        );
    END LOOP;

    COMMIT;
END;
/

