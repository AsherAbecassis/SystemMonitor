package services

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/Ullaakut/nmap/v2"
	osfamily "github.com/Ullaakut/nmap/v2/pkg/osfamilies"
	"github.com/asher/model"
)

var myClient = &http.Client{Timeout: 10 * time.Second}

func getJson(url string, target interface{}) error {
	r, err := myClient.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}

func GetDockerStatsServices(url string) []model.DockerStats {
	foo1 := new([]model.DockerStats) // or &Foo{}
	getJson(url+"/GetDockerStats", foo1)

	// var slice []model.InfoStat
	// slice = append(slice, *foo1)
	return *foo1
}

func GetHostInfo(url string) *model.InfoStat {
	foo1 := new(model.InfoStat) // or &Foo{}
	getJson(url+"/GetPcInfo", foo1)

	getJson(url+"/getLocalIp", &foo1)
	getJson(url+"/GetDiskInfo", &foo1)
	getJson(url+"/getMemoryUsage", foo1)
	// var slice []model.InfoStat
	// slice = append(slice, *foo1)
	return foo1
}

func NetworkScanning() {
	// Equivalent to
	// nmap -F -O 192.168.0.0/24
	scanner, err := nmap.NewScanner(
		nmap.WithTargets("10.100.102.0/24"),
		nmap.WithFastMode(),
		nmap.WithOSDetection(),
	)
	if err != nil {
		log.Fatalf("unable to create nmap scanner: %v", err)
	}

	result, _, err := scanner.Run()
	if err != nil {
		log.Fatalf("nmap scan failed: %v", err)
	}

	countByOS(result)
}

func countByOS(result *nmap.Run) {
	var (
		linux, windows int
	)

	// Count the number of each OS for all hosts.
	for _, host := range result.Hosts {
		for _, match := range host.OS.Matches {
			for _, class := range match.Classes {
				switch class.OSFamily() {
				case osfamily.Linux:
					linux++
				case osfamily.Windows:
					windows++
				}
			}

		}
	}

	fmt.Printf("Discovered %d linux hosts and %d windows hosts out of %d total up hosts.\n", linux, windows, result.Stats.Hosts.Up)
}

// func GetMemory(url string){
// 	foo1 := new(model.Memory) // or &Foo{}
// 	getJson(url+"/getMemoryUsage", foo1)
// 	var slice []model.InfoStat
// 	slice = append(slice, *foo1)
// 	return slice
// }
