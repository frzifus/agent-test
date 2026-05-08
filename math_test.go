package agent_test

import "testing"

func TestAdd(t *testing.T) {
	tests := []struct {
		name     string
		a, b     int
		expected int
	}{
		{"positive numbers", 2, 3, 5},
		{"zero and positive", 0, 5, 5},
		{"positive and zero", 5, 0, 5},
		{"zero and zero", 0, 0, 0},
		{"negative and positive", -3, 5, 2},
		{"positive and negative", 5, -3, 2},
		{"both negative", -3, -5, -8},
		{"large numbers", 1000000, 2000000, 3000000},
		{"large negative numbers", -1000000, -2000000, -3000000},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Add(tt.a, tt.b)
			if result != tt.expected {
				t.Errorf("Add(%d, %d) = %d; expected %d", tt.a, tt.b, result, tt.expected)
			}
		})
	}
}

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
