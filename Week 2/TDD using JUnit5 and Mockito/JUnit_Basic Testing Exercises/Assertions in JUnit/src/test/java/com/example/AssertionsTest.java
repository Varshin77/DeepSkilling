package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);          // ✅ equals
        assertTrue(5 > 3);               // ✅ true
        assertFalse(5 < 3);              // ✅ false
        assertNull(null);               // ✅ null
        assertNotNull(new Object());    // ✅ not null
    }
}
