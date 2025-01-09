export const getFontFamily = (base = 'Inter_18pt', weight) => {
  switch (weight) {
    case '100':
      return `${base}-Thin`;
    case '200':
      return `${base}-ExtraLight`;
    case '300':
      return `${base}-Light`;
    case 'normal':
    case '400':
      return `${base}-Regular`;
    case '500':
      return `${base}-Medium`;
    case '600':
      return `${base}-SemiBold`;
    case 'bold':
    case '700':
      return `${base}-Bold`;
    case '800':
      return `${base}-ExtraBold`;
    case '900':
      return `${base}-Black`;

    default:
      return `${base}-Regular`;
  }
};
