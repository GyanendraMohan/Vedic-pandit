import * as React from "react"
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = React.useState(false)
  return error ? (
    <div className="flex items-center justify-center bg-gray-200 text-gray-400 rounded-full ">
      <span className="text-3xl">🧑</span>
    </div>
  ) : (
    <img {...props} onError={() => setError(true)} />
  )
}
