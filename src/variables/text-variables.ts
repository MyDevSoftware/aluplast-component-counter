const CounterText = {
  PLUS: 'Dodać',
  MINUS: 'Odjąć',
  CLEAR_COUNTER_DATA: 'Usuń danę licznika',
  NO_LOGS: 'Brak logów',
  COUNTER_LOGS: 'Logi licznika',
  CLEAR_COUNTER_HISTORY_CONFIRM: 'Napewno chcesz usunąć danę licznika?',
  CLEAR_ALL_COUNTERS_DATA_CONFIRM: 'Napewno chcesz usunąć danę wszystkich liczników?',
  CLEAR_ALL_COUNTERS_DATA: 'Usunąć danę wszystkich liczników w aplikacji',
  OPEN_COUNTER: 'Otwórz licznik',
  LASST_CHANGE_TITLE: 'Ostatnia zmiana',
  COUNTERS_SETTING: 'Ustawienia liczników',
};

enum InputMessagesText {
  EMPTY_FIELD = 'Nic nie wpisanę w pole!',
  DIVISION_BY_ZERO = 'Nie można dodać/odjąć ZERO!',
  DEFAULT = '',
}

enum ErrorsText {
  COMPONENT_NOT_FOUND = 'Nie znaleziono komponentu do przeliczenia.',
  COUNTER_OPENING_ERROR = 'Błąd przy otwarciu licznika',
  COMPONENT_NOT_FOUND_WITH_UNID = 'Nie znaleziono komponentu o numerze - ',
  SOMETHING_WENT_WRONG = 'uuups... Coś poszło nie tak...',
  ITEMS_LIST_NOT_FOUND = 'Nie udało się nam otworzyć listę komponentów.',
  FAILED_OPEN_COUNTER_CALLED_COUNTERNAME = 'Nie udało się otworzyć licznik o nazwie - ',
}

const InterfaceText = {
  CLOSE_MODAL: 'Zamknąć okno',
  BACK_TO_OVERVIEW: 'Powrót do przeglądu',
  CANCEL_DELETING: 'Anulować',
  CONFIRM_DELETING: 'Potwierdź usunięcie',
  AMOUNT: 'Ilość',
  DELETE: 'Usunąć',
};

export { CounterText, ErrorsText, InterfaceText, InputMessagesText };
