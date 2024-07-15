import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import styles from './style';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import PhotoBackdropLocalImage from './local-image';

type PhotoBackdropProps = {
  children: React.ReactNode;
};

const PhotoBackdrop: React.FC<PhotoBackdropProps> = ({children}) => {
  const [photoSource, setPhotoSource] = useState<ImageSourcePropType>();

  useEffect(() => {
    const getReadMediaPermissions = async () => {
      const permissions =
        Number(Platform.Version) >= 33
          ? [
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            ]
          : [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE];

      const statuses = await Promise.all(
        permissions.map(p => PermissionsAndroid.check(p)),
      );
      const allPermissionsGranted = statuses.every(status => status);

      if (allPermissionsGranted) {
        return true;
      }

      const newStatuses = await PermissionsAndroid.requestMultiple(permissions);
      return permissions.every(
        p => newStatuses[p] === PermissionsAndroid.RESULTS.GRANTED,
      );
    };

    const fetchPhotos = async () => {
      try {
        const isGrantedPermissions = await getReadMediaPermissions();
        if (!isGrantedPermissions) {
          return;
        }

        const {edges} = await CameraRoll.getPhotos({first: 1});
        if (edges.length) {
          setPhotoSource({uri: edges[0].node.image.uri});
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchPhotos();
  }, []);

  if (!photoSource) {
    return <PhotoBackdropLocalImage>{children}</PhotoBackdropLocalImage>;
  }

  return (
    <ImageBackground
      style={styles.backdrop}
      source={photoSource}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

export default PhotoBackdrop;
