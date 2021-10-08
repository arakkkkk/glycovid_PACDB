# glycovid_PACDB

## 参考リンク

[PACDB](https://jcggdb.jp/search/PACDB.cgi?lang=jp)<br>
[PACDB_SPARQList](https://sparqlist.glycosmos.org/sparqlist/glycosmos_pacdbs_list)<br>
[現在の取得データ数](https://docs.google.com/spreadsheets/d/12ToSWPLEzEuzOnhnIxQkpFYCVSGPpxUpykH-ihZODko/edit#gid=0)<br>

## プログラム概要

-   メインプログラム
    -   get_sugarbind_id.py # pacdb.json の一覧から sugarbind でスクレイピングする
        ＊structure に関しては PACDB のサイトから sequence, jcggid を取得して
        jcggid から glytoucanid を取得
-   データ
    -   pacdb.json # PACDB_SPARQList から取得した json データ
    -   data/\* # get_sugarbind_id.py の出力
-   スクレイピングプログラム - scrape_pacdb/\*
-   \*現状メインプログラムからスクレイピングを実行してデータとして json に出力している

## PACDB と SugarBind のデータ名の対応

| PACDB        | SugarBind |
| ------------ | --------- |
| sci_name     | agent     |
| ligand_name  | ligand    |
| target_label | area      |
| gly_seq      | structure |
| pubmed_id    | pubmed    |

## 備考

### これまでやったこと

参考 ↓
https://docs.google.com/document/d/1b9aF3bTt-7Pk_5iK9_wQ8Nznuc49ihrsg0cE6dgEvx0/edit#heading=h.jogekbl2j55m

1. PACDB のデータの調査
2. PACDB の label データから SugarBindId を取得
3. 全体を通して、sugarbind のスクレイピングでどのくらい取得出来たかの調査
4. 取得出来ないデータに対して検索ワードをアレンジして取得率を上げるようプログラム変更
5. structure に関しては別途方法で取得する必要性
    - pacdb のサイトから sequence と jcggid を取得
    - jcggid から glytoucanid を取得

### これからやること

1. structure のデータについて
    - 現在の取得方法(PACDB のサイトから sequence, jcggid を取得して jcggid から glytoucanid を取得)では取得出来なかったデータが多い
    - [formatconverter](https://api.glycosmos.org/glycanformatconverter/)から
      PACDB の IUPAC で書かれた glycan sequence を WURCS に変換してそれを用いて GlyTouCan で検索
    - 最後に GlyTouCan の id から sugarbind_id を取得
2. agent のデータについて
    - スクレイピングプログラムでは agent データを sugarbindid に変換できたものが少なかった.
    - 以下サイトを参考にしながら sugarbind での検索ワードを調整...?
    - http://togogenome.org/sparqlist/togogenome_organism_names
    - http://togogenome.org/sparql
    - http://togogenome.org/sparqlist/
3. 現在のすべてのデータに対して(/data/\*)
    - 現在 json の
      label に pacdb で保存されていたデータ
      id に label データからスクレイピングで取得して sugarbind の id
      sugarbind_label にスクレイピング取得した sugarbindid で保存されている名前
      が入っているので、label と sugarbind_label を比較して正しくデータが取得できているかを確認する作業
    - 現状 pacdb.json に PACDB のデータセット、data/\*の json に PACDB のデータと sugarbind のデータの繋がりが書かれてるので、
      最終的にはすべてのデータセットが sugarbind_id を持つようにまとめる？
