import SwiftUI

struct ContentView: View {
    @State private var animate = false
    var body: some View {
        VStack {
            GeometryReader { geometry in
                let textWidth: CGFloat = 500 // Adjust if needed
                Text("Happy Working, Miss Sara")
                    .font(.title)
                    .padding()
                    .frame(width: textWidth, alignment: .leading)
                    .offset(x: animate ? -textWidth : geometry.size.width)
                    .onAppear {
                        animate = false
                        withAnimation(Animation.linear(duration: 6).repeatForever(autoreverses: false)) {
                            animate = true
                        }
                    }
            }
            .frame(height: 50)
            // Embedding the WebView
            WebView(htmlName: "index")
                .edgesIgnoringSafeArea(.all)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
