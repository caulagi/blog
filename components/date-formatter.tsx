import { parseISO, format } from 'date-fns'

interface DateFormatterProps {
  dateString: string
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className="italic">
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}

export default DateFormatter
