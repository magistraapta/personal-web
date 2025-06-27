package handler

import (
	"encoding/json"
	"net/http"
)

type UserTest struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

var storage = []UserTest{
	{Name: "John", Age: 20},
	{Name: "Jane", Age: 21},
	{Name: "Jim", Age: 22},
}

func TestHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(storage)
}
