interface QuotationProps {
  author: string
  quotation: string
  reference?: string
}

const Quotation: React.FC<QuotationProps> = ({
  author,
  quotation,
  reference,
}) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        {reference && (
          <div>
            <h5 className="mb-2 block font-sans font-semibold leading-snug">
              {reference}
            </h5>
            <hr className="border-gray-300 m-1 lg:m-1" />
          </div>
        )}
        <div className="flex float-right">{author}</div>
        <div className="clear-both"></div>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {quotation}
        </p>
      </div>
    </div>
  )
}

export default Quotation
