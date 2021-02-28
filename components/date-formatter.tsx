import { parseISO, format } from 'date-fns'

interface DateFormatterProps {
  dateString: string
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className="italic text-purple-500">{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
