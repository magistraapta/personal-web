package internal

import (
	"backend/internal/handler"
	"net/http"
)

func SetupRouter() *http.ServeMux {
	router := http.NewServeMux()
	router.HandleFunc("/test", handler.TestHandler)
	return router
}
