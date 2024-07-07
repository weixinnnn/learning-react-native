import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BookItem from './book-item';
import {Book, fetchBooks} from './nytimes';

const FlatListScreen = () => {
  const [data, setData] = useState<(Book & {key: string})[]>([]);

  useEffect(() => {
    (async () => {
      const books = await fetchBooks();
      const processedBooks = books.map(book => {
        return Object.assign(book, {key: book.title});
      });
      setData(processedBooks);
    })();
  }, []);

  const renderItem = ({item}: {item: (typeof data)[0]}) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
});
