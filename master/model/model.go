package model

type Agents struct {
	Alist []Agent `json:"ip"`
}

type Agent struct {
	Ip   string `json:"ip"`
	Host string `json:"host"`
}

type Memory struct {
	MemTotal     float64 `json:"total"`
	MemFree      float64 `json:"free"`
	MemAvailable float64 `json:"avilable"`
	MemPercent   int     `json:"mempercent"`
}

type InfoStat struct {
	Hostname             string  `json:"hostname"`
	Uptime               uint64  `json:"uptime"`
	BootTime             uint64  `json:"bootTime"`
	Procs                uint64  `json:"procs"`           // number of processes
	OS                   string  `json:"os"`              // ex: freebsd, linux
	Platform             string  `json:"platform"`        // ex: ubuntu, linuxmint
	PlatformFamily       string  `json:"platformFamily"`  // ex: debian, rhel
	PlatformVersion      string  `json:"platformVersion"` // version of the complete OS
	KernelVersion        string  `json:"kernelVersion"`   // version of the OS kernel (if available)
	KernelArch           string  `json:"kernelArch"`      // native cpu architecture queried at runtime, as returned by `uname -m` or empty string in case of error
	VirtualizationSystem string  `json:"virtualizationSystem"`
	VirtualizationRole   string  `json:"virtualizationRole"` // guest or host
	HostID               string  `json:"hostid"`
	HostIp               string  `json:"hostip"` // ex: uuid
	Path                 string  `json:"path"`
	Fstype               string  `json:"fstype"`
	Total                uint64  `json:"total"`
	Free                 uint64  `json:"free"`
	Used                 uint64  `json:"used"`
	UsedPercent          float64 `json:"usedPercent"`
	InodesTotal          uint64  `json:"inodesTotal"`
	InodesUsed           uint64  `json:"inodesUsed"`
	InodesFree           uint64  `json:"inodesFree"`
	InodesUsedPercent    float64 `json:"inodesUsedPercent"`
	MemPercent           int     `json:"mempercent"`
}
