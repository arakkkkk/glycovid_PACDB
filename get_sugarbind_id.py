import get_pacdata as pac
from scrape_pacdb import scrape_sugarbind_id as scrape
from scrape_pacdb.scrape_pacdb import jcgg2glytoucanid

import json


def get_agent_id(path, json_data):
    # pacdb.jsonの全データから検索、取得
    sci_name_list = pac.count_sci_name(json_data)
    # data/agent.jsonのデータから取得できていないデータ(sugarbind_idが"")のものを検索、取得
    sci_name_list = pac.count_sci_name2(json_data)
    data_type = "agents"
    agent_list = scrape.run_scrape(path, data_type, sci_name_list)
    f = open('./data/agent.json', 'w')
    json.dump(agent_list, f)
    f.close()


def get_ligand_id(path, json_data):
    data_type = "ligands"
    ligand_list = pac.count_ligand_name2(json_data)
    ligand_list = scrape.run_scrape(path, data_type, ligand_list)
    f = open('./data/ligand.json', 'w')
    json.dump(ligand_list, f)
    f.close()


def get_area_id(path, json_data):
    target_list = pac.count_target_label2(json_data)
    data_type = "affectedAreas"
    area_list = scrape.run_scrape(path, data_type, target_list)
    f = open('./data/area.json', 'w')
    json.dump(area_list, f)
    f.close()


def get_structure_id(path, json_data):
    json_data = jcgg2glytoucanid()
    f = open('./data/structure.json', 'w')
    json.dump(json_data, f)
    f.close()



def get_result(json_data):
    sci_name_list = pac.count_sci_name(json_data)
    sci_name_list2 = pac.count_sci_name2(json_data)
    print('agent: ', len(sci_name_list2), '/', len(sci_name_list))
    ligand_list = pac.count_ligand_name(json_data)
    ligand_list2 = pac.count_ligand_name2(json_data)
    print('ligand: ', len(ligand_list2), '/', len(ligand_list))
    target_list = pac.count_target_label(json_data)
    target_list2 = pac.count_target_label2(json_data)
    print('area: ', len(target_list2), '/', len(target_list))
    structure_list = pac.count_gly_seq(json_data)
    structure_list2 = pac.count_gly_seq2(json_data)
    print('structure: ', len(structure_list2), '/', len(structure_list))

if __name__ == "__main__":
    print()
    json_data = pac.get_json_from_file("./pacdb.json")
    # sci_name_list = pac.count_sci_name(json_data)
    # ligand_name_list = pac.count_ligand_name(json_data)
    # target_label_list = pac.count_target_label(json_data)
    # gly_seq_list = pac.count_gly_seq(json_data)
    # pubmed_id_list = pac.count_pubmed_id(json_data)

    path = '/Users/Kouiti/local_file/glycovid/pacdb/scrape_pacdb/'
    # get_agent_id(path, json_data)
    # get_ligand_id(path, json_data)
    # get_area_id(path, json_data)
    # get_structure_id(path, json_data)

    # 元データの数とsuigarbind_idが取得出来たデータの数を比較出力する
    get_result(json_data)
