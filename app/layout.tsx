import '../styles/globals.css'
import Headerr from "../components/Headerr"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <Headerr />
          {children}</body>
    </html>
  )
}
