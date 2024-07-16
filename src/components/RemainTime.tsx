interface RemainTimeProps {
  text: string
  prayer: string
  time: string
}
export default function RemainTime({ text, prayer, time }: RemainTimeProps) {
  return (
    <div>
      <h2>
        {text} {prayer}
      </h2>
      <span className="remainTime">{time}</span>
    </div>
  )
}
