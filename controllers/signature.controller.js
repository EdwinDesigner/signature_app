import fs from 'fs';
import { signInvoiceXml } from 'ec-sri-invoice-signer';

export const createSignature = async (req, res) => {

  // const { xml, signature } = req.files


  const password = req.body.password;
  // const xmlFile = xml[0];
  // const p12File = signature[0];

  // if(!xmlFile && !p12File) return res.status(400).send('Los archivos XML y P12 son requeridos.');
  if(!password) return res.status(400).send('La contraseña es requerida.');

  res.status(200).json({ password });

  // try {

  //   /* El XML de la factura a firmarse. */
  //   const invoiceXml = fs.readFileSync(xmlFile.path, 'utf8');

  //   /* El contenido del archivo pkcs12 (.p12/.pfx extension) del firmante representado como Node Buffer o string base64.
  //   En este caso es un Node Buffer. */
  //   const p12FileData = fs.readFileSync(p12File.path);

  //   /* Firma la factura. Si no se pasa la opción pkcs12Password, '' será usada como contraseña. */
  //   const signedInvoice = signInvoiceXml(invoiceXml, p12FileData, { pkcs12Password: password });

  //   // eliminar archivos xml y p12 de la carpeta uploads
  //   fs.unlinkSync(xmlFile.path);
  //   fs.unlinkSync(p12File.path);

  //   // Convertir el XML firmado a base64
  //   const signedInvoiceBase64 = Buffer.from(signedInvoice).toString('base64');

  //   // Enviar la respuesta con el XML firmado en base64
  //   res.status(200).json({
  //     message: 'Factura firmada exitosamente',
  //     xmlBase64: signedInvoiceBase64
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ message: 'Error al firmar la factura.' });
  // }
};