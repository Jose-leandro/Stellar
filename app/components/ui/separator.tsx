import React from 'react';
import { Separator as RadixSeparator } from '@radix-ui/react-separator';

// Define props type
interface SeparatorProps {
  sizeInWidth: string;
}

// Functional component with properly typed props
const Separator: React.FC<SeparatorProps> = ({ sizeInWidth }) => (
  <RadixSeparator className={`${sizeInWidth} bg-white h-[1px]`} />
);

export default Separator;

