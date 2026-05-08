package agent_test

import "testing"

func TestIsOdd(t *testing.T) {
	tests := []struct {
		name     int
		expected bool
	}{
		// Positive odd numbers
		{1, true},
		{3, true},
		{5, true},
		{99, true},
		// Positive even numbers
		{0, false},
		{2, false},
		{4, false},
		{100, false},
		// Negative odd numbers
		{-1, true},
		{-3, true},
		{-5, true},
		{-99, true},
		// Negative even numbers
		{-2, false},
		{-4, false},
		{-100, false},
		// Large numbers
		{1000000001, true},
		{1000000000, false},
		{-1000000001, true},
		{-1000000000, false},
	}

	for _, tt := range tests {
		t.Run(string(rune(tt.name)), func(t *testing.T) {
			result := IsOdd(tt.name)
			if result != tt.expected {
				t.Errorf("IsOdd(%d) = %v, want %v", tt.name, result, tt.expected)
			}
		})
	}
}

func TestIsEven(t *testing.T) {
	tests := []struct {
		name     int
		expected bool
	}{
		// Positive even numbers
		{0, true},
		{2, true},
		{4, true},
		{100, true},
		// Positive odd numbers
		{1, false},
		{3, false},
		{5, false},
		{99, false},
		// Negative even numbers
		{-2, true},
		{-4, true},
		{-100, true},
		// Negative odd numbers
		{-1, false},
		{-3, false},
		{-5, false},
		{-99, false},
		// Large numbers
		{1000000000, true},
		{1000000001, false},
		{-1000000000, true},
		{-1000000001, false},
	}

	for _, tt := range tests {
		t.Run(string(rune(tt.name)), func(t *testing.T) {
			result := IsEven(tt.name)
			if result != tt.expected {
				t.Errorf("IsEven(%d) = %v, want %v", tt.name, result, tt.expected)
			}
		})
	}
}
