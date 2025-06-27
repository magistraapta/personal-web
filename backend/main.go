package main

import (
	"backend/internal"
	"backend/util"
	"log"
	"net/http"
)

func main() {
	router := internal.SetupRouter()
	handler := util.EnableCors(router)
	log.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", handler)
}
