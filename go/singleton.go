package main

import "sync"

// 싱글톤 예시
type Logger struct {
	data string
}

var instance *Logger
var once sync.Once

func GetInstance() *Logger {
	once.Do(func() {
		instance = &Logger{}
	})
	return instance
}

func (l *Logger) SetData(data string) {
	l.data = data
}

func main() {
	logger1 := GetInstance()
	logger1.SetData("Hello")
	logger2 := GetInstance()
	logger2.SetData("World")

	println(logger1.data) // World
	println(logger2.data) // World
}
