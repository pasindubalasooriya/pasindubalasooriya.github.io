import { profile } from '../lib/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <p className="max-w-content mx-auto px-6 py-8 text-center text-xs text-muted">
        Built by {profile.name} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
