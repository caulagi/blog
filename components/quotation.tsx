import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

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
    <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="p-6">
        {reference && (
          <div>
            <h5 class="mb-2 block font-sans font-semibold leading-snug">
              {reference}
            </h5>
            <hr class="border-gray-300 m-1 lg:m-1" />
          </div>
        )}
        <div class="flex float-right">{author}</div>
        <div class="clear-both"></div>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {quotation}
        </p>
      </div>
    </div>
  )
}

export default Quotation
