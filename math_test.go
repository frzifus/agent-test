package agent_test

import "testing"

func TestIsOdd(t *testing.T) {
	tests := []struct {
		name     string
		input    int
		expected bool
	}{
		{"basic odd number", 1, true},
		{"basic even number", 2, false},
		{"zero is even", 0, false},
		{"negative odd", -1, true},
		{"negative even", -2, false},
		{"large odd number", 999999, true},
		{"large even number", 1000000, false},
		{"large negative odd", -999999, true},
		{"large negative even", -1000000, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := IsOdd(tt.input)
			if result != tt.expected {
				t.Errorf("IsOdd(%d) = %v; expected %v", tt.input, result, tt.expected)
			}
		})
	}
}

func TestIsEven(t *testing.T) {
	tests := []struct {
		name     string
		input    int
		expected bool
	}{
		{"zero is even", 0, true},
		{"basic odd number", 1, false},
		{"basic even number", 2, true},
		{"negative odd", -1, false},
		{"negative even", -2, true},
		{"large odd number", 999999, false},
		{"large even number", 1000000, true},
		{"large negative odd", -999999, false},
		{"large negative even", -1000000, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := IsEven(tt.input)
			if result != tt.expected {
				t.Errorf("IsEven(%d) = %v; expected %v", tt.input, result, tt.expected)
			}
		})
	}
}
