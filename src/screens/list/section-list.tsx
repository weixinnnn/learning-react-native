import React, {useEffect, useState} from 'react';
import {
  SectionList,
  SectionListData,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BookItem from './book-item';
import {Book, fetchBooks} from './nytimes';

const SectionListScreen = () => {
  const [sections, setSections] = useState<
    {
      title: string;
      data: (Book & {
        key: string;
      })[];
    }[]
  >([]);

  useEffect(() => {
    const addKeysToBooks = (books: Book[]) => {
      return books.map(book => {
        return Object.assign(book, {key: book.title});
      });
    };

    const processData = async () => {
      const results = await Promise.all([
        await fetchBooks('hardcover-fiction'),
        await fetchBooks('hardcover-nonfiction'),
      ]);

      if (results.length !== 2) {
        console.error('Unexpected results');
      }

      setSections([
        {
          title: 'Hardcover Fiction',
          data: addKeysToBooks(results[0]),
        },
        {
          title: 'Hardcover Nonfiction',
          data: addKeysToBooks(results[1]),
        },
      ]);
    };

    processData();
  }, []);

  const renderHeader = ({
    section,
  }: {
    section: SectionListData<
      Book & {
        key: string;
      },
      {
        title: string;
        data: (Book & {
          key: string;
        })[];
      }
    >;
  }) => {
    return <Text style={styles.headingText}>{section.title}</Text>;
  };

  const renderItem = ({
    item,
  }: {
    item: Book & {
      key: string;
    };
  }) => {
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
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
  headingText: {
    fontSize: 24,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
