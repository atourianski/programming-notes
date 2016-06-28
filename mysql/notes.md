SQL Introduction
stands for structured query language
is a language of databases
info in the database is stored in objects called tables
tables are identified by their names and are comprised of columns and rows
columns contain the column name, column data type, and any other attributes
rows contain the records/data for the columns
many tables will have links between each other, either a one-to-one or one-to-many relationship, these kind of databases are called relational model databases

Four Basic SQL operations (CRUD)
Create - filling data into tables
Read - Query data out of a table
Update - change data already in a table
Delete - remove data from a table

Creating a Table

Syntax for creating a table:

CREATE TABLE table_name
(column_1 data_type,
column_2 data_type,
column_3 data_type);

Syntax rules
tables and columns must start with a letter
names must not exceed 30 characters in length
SQL reserved keywords are forbidden as names (e.g 'select', 'insert', 'create', etc)

3 Data Types 

numeric
smallint
mediumint
int or integer
bigint
float (m,d)
used for numeric values that contain decimals
m is total amount of digits
d is the number of digits after the decimal
boolean (true/false)
date
date - YYYY-MM-DD
datetime -YYYY-MM-DD HH:MM:SS
timestamp - same format as datetime but converts current timezone to UTC
string
varchar(m)
a combo of text characters with the length of m
example:

CREATE TABLE Movie_quotes
(‘Q_TEXT’ varchar(200),
‘Q_CHARACTER’ varchar(20),
‘Q_MOVIE’ varchar(20),
‘Q_YEAR’ number(4));

`Q_TEXT` that can accept a 200 character long string.
`Q_CHARACTER` that can accept a 20 character long string.
`Q_MOVIE` that can accept a 20 character long string
`Q_YEAR`that can accept four numbers for a year.

Inserting into a Table

command for inserting data into a table is 'INSERT', the format is:

INSERT INTO table_name
(column_1, column_2, ... column_n)
VALUES (value_1, value_2, ... value_n);

strings should be enclosed in is single quotes, numbers should not
example:

INSERT INTO Movie_quotes
(Q_TEXT, Q_CHARACTER, Q_MOVIE, Q_YEAR)
VALUES (‘I’ll be back’, ‘The Terminator’, ‘The Terminator’, 1984);

column_1 matches up with value_1 and so on
if you'd like to add in bulk it would look like this:

INSERT INTO Movie_quotes
 (Q_TEXT, Q_CHARACTER, Q_MOVIE, Q_YEAR)
 VALUES ('I find your lack of faith disturbing.', 'Darth Vader', 'Star Wars', 1977),
('It’s a trap!', 'Admiral Ackbar', 'Star Wars', 1983),
('Never tell me the odds.', 'Han Solo', 'Star Wars', 1980),
('Do. Or do not. There is no try.', 'Yoda', 'Star Wars', 1980),
('Stupid is as stupid does.', 'Forrest Gump', 'Forrest Gump', 1994),
('My mama always said: Life was like a box of chocolates. You never know what you’re gonna get.', 'Forrest Gump', 'Forrest Gump', 1994),
('Run, Forrest! Run!', 'Jenny Curran', 'Forrest Gump', 1994);

Reading Data

Three most important statements when querying databases:
SELECT
tells computer what values you would like to have returned to you
FROM
tells you in which tables the values can be found
WHERE
 Acts as a filter by listing the conditions that you would like the information to meet before it is chosen
Optional 

SELECT column_1, ... column_n FROM table_name;

If we want to select all columns, or we don't know which exact columns to choose, we can use the wildcard asterisk character '*' that will select everything 

SELECT * FROM table_name;

Some operators for the WHERE clause
`=` – Equal to
`<` – Less than.
`>=` – Greater than or equal to.
`<=` – Less than or equal to.
`<>` –  Not equal to.
`BETWEEN` – Between two values.
`LIKE` – Search for a pattern.
`IN` – Multiple possible values for a column.

For example, to only get movies quotes from the movies star wars we would write:

SELECT * FROM Movie_quotes
WHERE Q_MOVIE = ‘Star Wars’; 

Updating Data

The UPDATE statement syntax is as follows:

UPDATE table_name
SET column_name = new_value
WHERE column_name operator value;

It’s important to carefully contruct a WHERE clause or else all the data in the column wil be updated. The WHERE clauses specifies which record should be updated. Example:

UPDATE Movie_quotes
SET Q_TEXT = ‘I’ll be back!’
WHERE Q_MOVIE = ‘The Terminator’;

By selecting just the row with the movie “The Terminator” we are updating only a column Q_TEXT in that one specified row

Deleting Data

The DELETE statement is used to delete rows in a table. The command’s syntax is as follows:

	DELETE FROM table_name
	WHERE column_name operator value;

Without the WHERE clause, all data within the table will be deleted
Let’s assume we don’t like the movie Forrest Gump any more and want to delete quotes from that movie. To remove all quotes from that movie we would write the following SQL command:

DELETE FROM Movie_quotes
WHERE Q_MOVIE = ‘Forrest Gump’;

To delete a whole table we use the DROP TABLE command:

DROP TABLE table_name;





