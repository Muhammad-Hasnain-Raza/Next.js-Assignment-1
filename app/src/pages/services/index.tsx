import Link from "next/link"



export default function index() {
  return (
    <div>
      <h1></h1>
      <ul>
        <li>
            <Link href="/services/webdevelopment">Website Development</Link>
        </li>
        <li>
            <Link href="/services/appdevelopment">App Development</Link>
        </li>
      </ul>
    </div>
  )
}
