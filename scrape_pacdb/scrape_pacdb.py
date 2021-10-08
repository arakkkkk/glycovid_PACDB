import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import traceback
import re
import os
import copy
import sys
import json
import datetime
import chromedriver_binary
import scrape_sugarbind_id

def scrape_glycan(d_today=datetime.now()):
    glycan_list = []
    scrape_url = 'https://jcggdb.jp/search/PACDB.cgi?list=disease'
    for i in range(2, 101):
        options = webdriver.ChromeOptions()
        # デフォルトダウンロードフォルダを変更する
        # 自動テストソフトウェアによって制御されていますというメッセージを非表示にする
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        # 拡張機能の自動更新をさせない（アプリ側の自動アップデートとドライバーの互換性によるエラーを回避）
        options.add_experimental_option('useAutomationExtension', False)
        # ヘッドレスモードの設定
        options.add_argument('--headless')
        driver = webdriver.Chrome("./chromedriver", chrome_options=options)

        try:
            driver.implicitly_wait(5)
            driver.get(scrape_url)
            time.sleep(2)
            # JavaScrptここから
            # diseaseを選択してページ遷移
            element = driver.find_element_by_xpath('/html/body/table[2]/tbody/tr[2]/td/table/tbody/tr['+str(i)+']/td/a')
            element.click()
            # glycanの一覧を取得していく
            for j in range(2, 20):
                for k in range(2, 30):
                    try:
                        sequence_elem = driver.find_element_by_xpath('/html/body/table[2]/tbody/tr[2]/td/div/table['+str(j)+']/tbody/tr['+str(k)+']/td[2]')
                        sequence = sequence_elem.text
                        sequence = sequence.split('\n')[1].replace(' [ Binding ]', '')
                        jcggid_elem = driver.find_element_by_xpath('/html/body/table[2]/tbody/tr[2]/td/div/table['+str(j)+']/tbody/tr['+str(k)+']/td[2]/a')
                        jcggid = jcggid_elem.text
                        jcggid = jcggid.split('\n')[0]
                        glycan_list.append({"sequence": sequence, "jcggid": jcggid})
                        print(str(i), ':')
                        print('\tsequence: ', sequence)
                        print('\tjcggid: ', jcggid)
                    except:
                        break

            # JavaScriptここまで
            time.sleep(3)
        except:
            traceback.print_exc()
        finally:
            driver.quit()

    return glycan_list


def scrape_taxon(d_today, path):
    taxon_list = []
    scrape_url = 'https://jcggdb.jp/search/PACDB.cgi?list=disease'
    for i in range(2, 101):
        print('i => ',i)
        options = webdriver.ChromeOptions()
        # デフォルトダウンロードフォルダを変更する
        options.add_experimental_option(
            "prefs", {"download.default_directory": path + 'data'})
        # 自動テストソフトウェアによって制御されていますというメッセージを非表示にする
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        # 拡張機能の自動更新をさせない（アプリ側の自動アップデートとドライバーの互換性によるエラーを回避）
        options.add_experimental_option('useAutomationExtension', False)
        driver = webdriver.Chrome("./chromedriver", chrome_options=options)

        try:
            driver.implicitly_wait(5)
            driver.get(scrape_url)
            time.sleep(2)
            # JavaScrptここから
            element = driver.find_element_by_xpath('/html/body/table[2]/tbody/tr[2]/td/table/tbody/tr['+str(i)+']/td/a')
            element.click()
            taxon = driver.find_element_by_xpath('/html/body/table[2]/tbody/tr[2]/td/div/table[1]/tbody/tr/td[2]/u/i').text
            taxon_list.append(taxon)

            # JavaScriptここまで
            time.sleep(3)
        except:
            traceback.print_exc()
        finally:
            driver.quit()

    taxon_list = list(set(taxon_list))
    print(taxon_list)


def jcgg2glytoucanid(d_today, path):
    json_open = open("/Users/Kouiti/local_file/glycovid/pacdb/data/structure.json", 'r')
    json_data = json.load(json_open)

    scrape_url = 'https://jcggdb.jp/idb/jcggdb/'
    for i in range(len(json_data)):
        print('i => ',i,'/',len(json_data), '\tURL =>', scrape_url + json_data[i]["jcggid"])
        options = webdriver.ChromeOptions()
        # デフォルトダウンロードフォルダを変更する
        options.add_experimental_option(
            "prefs", {"download.default_directory": path + 'data'})
        # 自動テストソフトウェアによって制御されていますというメッセージを非表示にする
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        # 拡張機能の自動更新をさせない（アプリ側の自動アップデートとドライバーの互換性によるエラーを回避）
        options.add_experimental_option('useAutomationExtension', False)
        # ヘッドレスモードの設定
        options.add_argument('--headless')
        driver = webdriver.Chrome("./chromedriver", chrome_options=options)
        try:
            driver.implicitly_wait(5)
            driver.get(scrape_url + json_data[i]["jcggid"])
            time.sleep(2)
            # JavaScrptここから
            result = driver.find_element_by_xpath('/html/body/center[2]/div/table/tbody/tr/td/table/tbody/tr/td[2]/a')
            json_data[i]["glytoucanid"] = result.text
            print('add ', result.text)

            # JavaScriptここまで
            time.sleep(3)
        except:
            traceback.print_exc()
            print('fail add ', json_data[i]["jcggid"])
        finally:
            driver.quit()

    return json_data

def delte_duplicate(data: list) -> list:
    try:
        for i in range(len(data)-1, -1, -1):
            for j in range(i):
                if(data[i] == data[j]):
                    data.pop(i)
                    break
    except:
        print('failed deldte duplicate')
    return data


if __name__ == "__main__":
    d_today = str(datetime.date.today())
    path = '/Users/Kouiti/local_file/glycovid/'
    # structure_list = scrape_glycan(d_today, path)
    # structure_list = delte_duplicate(structure_list)

    json_data = jcgg2glytoucanid(d_today, path)

    f = open('./data/structure.json', 'w')
    json.dump(json_data, f)
    f.close()
