import QRCode from 'qrcode';

const generateQR = async (text) => {
  try {
    console.log(
      await QRCode.toFile('images/qrcode.png', text, {
        // color: { dark: '#0345B6', light: '#0095FF' },
        width: 600,
        margin: 0.5,
      })
    );
  } catch (err) {
    console.error(err);
  }
};

generateQR('Tiago Sales de Azevedo Carioca');
