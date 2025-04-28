import { Slider as SliderPrimitive } from "@base-ui-components/react/slider"


type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root>

export const Slider = (props: SliderProps) => {
  return (
    <SliderPrimitive.Root {...props}>
      <SliderPrimitive.Control className="w-64 h-6 bg-system-200 rounded-full relative">
        <SliderPrimitive.Track className="w-full h-full bg-system-200 rounded-full">
          <SliderPrimitive.Indicator className="w-full h-full bg-system-500 rounded-full" />
          <SliderPrimitive.Thumb className="w-6 h-6 bg-system-500 rounded-full border-3 border-white shadow-sm" />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

