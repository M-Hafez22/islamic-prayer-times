import { to12Format } from "./helper/formatTime"

interface PrayCardProps {
  name: string
  time: string
  active: string
}
export default function PrayCard({ name, time, active }: PrayCardProps) {
  return (
    <li className={active}>
      <h3>{name}</h3>
      <h3>{to12Format(time)}</h3>
    </li>
  )
}
