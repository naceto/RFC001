package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("This is a sample Go application.")
}

func Iif[T any](condition bool, trueVal, falseVal T) T {
	if condition {
		return trueVal
	}

	return falseVal
}
