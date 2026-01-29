import { db, auth } from '../Config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { uploadImageToCloudinary } from './cloudinary';
import { toast } from 'react-toastify';

export const uploadProduct = async (productData) => {
  const user = auth.currentUser;

  if (!user) {
    toast.error("Please login first");
    return false;
  }

  const { name, price, description, address, file } = productData;
  const image = file[0];

  try {
    const imageUrl = await uploadImageToCloudinary(image);

    const product = {
      name,
      price,
      description,
      address,
      imageUrl,
      postedby: user.displayName || "unknown",
      ownerId: user.uid,          
      createdAt: serverTimestamp(),
    };

    console.log("UPLOADING PRODUCT:", product);

    await addDoc(collection(db, 'products'), product);

    toast.success('Product Added Successfully');
    return true;

  } catch (error) {
    console.error("UPLOAD FAILED:", error);
    toast.error(error.message);
    return false;
  }
};
