/** Стрелка, которая сдвигается при наведении на родительскую ссылку */
export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <span className={back ? 'arrow arrow--back' : 'arrow'} aria-hidden="true">
      {back ? '←' : '→'}
    </span>
  );
}
