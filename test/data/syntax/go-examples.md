# Test data: Go examples

## Example: hello world

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

## Example: video streaming

```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

func main() {
	// Set up routes
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/stream/", streamHandler)

	// Start server
	port := ":8080"
	fmt.Printf("Server running on http://localhost%s\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprintf(w, `
		<h1>Video Streaming Server</h1>
		<p>Recommended videos:</p>
		<ul>
			<li><a href="/stream/rickroll.mp4">Good Video</a></li>
		</ul>
	`)
}

func streamHandler(w http.ResponseWriter, r *http.Request) {
	// Get video filename from URL
	videoFile := filepath.Base(r.URL.Path)
	filePath := filepath.Join("./videos", videoFile)

	// Open the video file
	file, err := os.Open(filePath)
	if err != nil {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}
	defer file.Close()

	// Get file info for Content-Length
	fileInfo, err := file.Stat()
	if err != nil {
		http.Error(w, "File error", http.StatusInternalServerError)
		return
	}

	// Headers for streaming
	w.Header().Set("Content-Type", "video/mp4")
	w.Header().Set("Content-Length", fmt.Sprintf("%d", fileInfo.Size()))
	w.Header().Set("Accept-Ranges", "bytes")

	// Support for range requests (ex. seeking in video)
	http.ServeContent(w, r, videoFile, time.Now(), file)
}
```
