package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/asher/services"
)

func GetMemoryUsage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Memory endPoint")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	// w.Header().Add("access-control-allow-origin", "*")
	w.WriteHeader(http.StatusOK)
	memModel := services.ReadMemoryStats()
	memModel.MemAvailable = memModel.MemAvailable / 1000000
	memModel.MemFree = memModel.MemFree / 1000000
	memModel.MemTotal = memModel.MemTotal / 1000000
	memModel.MemPercent = int((100 - (memModel.MemAvailable/memModel.MemTotal)*100))

	json.NewEncoder(w).Encode(memModel)

}

func GetLocalIp(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.WriteHeader(http.StatusOK)
	ip := services.GetLocalIP()

	json.NewEncoder(w).Encode(ip)

}
func GetCpuUsage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	// w.Header().Add("access-control-allow-origin", "*")
	w.WriteHeader(http.StatusOK)
	cpu := services.StartCpu()

	json.NewEncoder(w).Encode(cpu)
}

func GetPs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	// w.Header().Add("access-control-allow-origin", "*")
	w.WriteHeader(http.StatusOK)
	psList := services.GetTotalProcesses()

	json.NewEncoder(w).Encode(psList)

}

func GetTemperature(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	res := services.GetTemperatureStat()

	json.NewEncoder(w).Encode(&res)

}

func GetPcInfo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	// w.Header().Add("access-control-allow-origin", "*")
	w.WriteHeader(http.StatusOK)
	res := services.GetPcInfoServices()

	json.NewEncoder(w).Encode(res)

}

func GetDiskInfo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	// w.Header().Add("access-control-allow-origin", "*")
	w.WriteHeader(http.StatusOK)
	res := services.GetDiskServices("/")

	json.NewEncoder(w).Encode(res)

}
