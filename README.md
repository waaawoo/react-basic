### useContext
a -> b -> c
a -> cはbを通る必要があったがそれを解決

### useMemo
計算時間が長い関数の無駄な再計算を防ぐ

### useCallBack
Reactのパフォーマンスを向上させるための機能
不要なレンダリングを防ぐ
必要な分だけレンダリングされる
const hogehoge = useCallback(() =>  {
  sethoge((hoge => hoge);
}, [])
