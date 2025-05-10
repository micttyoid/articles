# Test data - Swift example

```swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Counter App")
                .font(.largeTitle)
                .padding()
            
            Text("\(count)")
                .font(.system(size: 48))
            
            Button(action: {
                count += 1
            }) {
                Text("Increment")
                    .font(.title2)
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```