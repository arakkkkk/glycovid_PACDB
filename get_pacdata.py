import json

def get_json_from_file(filename):
    json_open = open(filename, 'r')
    json_data = json.load(json_open)
    # print('length of json data : ', len(json_data))
    return json_data

def count_sci_name(json_data):
    sci_name_list = []
    for data in json_data:
        if data['sci_name'] not in sci_name_list:
            sci_name_list.append(data["sci_name"])
    sci_name_list = list(set(sci_name_list))
    # print('sci_name count : ', len(sci_name_list))
    return sci_name_list

def count_ligand_name(json_data):
    ligand_name_list = []
    for data in json_data:
        if data['ligand_name'] not in ligand_name_list:
            ligand_name = data["ligand_name"]
            ligand_name_list.append(ligand_name)
    ligand_name_list = list(set(ligand_name_list))
    # print('ligand_name count : ', len(ligand_name_list))
    return ligand_name_list

def count_target_label(json_data):
    target_label_list = []
    for data in json_data:
        if data['target_label'] not in target_label_list:
            target_label_list.append(data["target_label"])
    target_label_list = list(set(target_label_list))
    # print('target_label count : ', len(target_label_list))
    return target_label_list

def count_gly_seq(json_data):
    gly_seq_list = []
    for data in json_data:
        if data['gly_seq'] not in gly_seq_list:
            gly_seq_list.append(data["gly_seq"])
    gly_seq_list = list(set(gly_seq_list))
    # print('gly_seq count : ', len(gly_seq_list))
    return gly_seq_list

def count_pubmed_id(json_data):
    pubmed_id_list = []
    for data in json_data:
        if data['pubmed_id'] not in pubmed_id_list:
            pubmed_id_list.append(data["pubmed_id"])
    # print('pubmed_id count : ', len(pubmed_id_list))
    return pubmed_id_list



def count_sci_name2(json_data):
    json_data = get_json_from_file("./data/agent.json")
    sci_name_list = []
    for dataset in json_data:
        if dataset["id"] == "":
            sci_name_list.append(dataset["label"])
    return sci_name_list

def count_target_label2(json_data):
    json_data = get_json_from_file("./data/area.json")
    area_list = []
    for dataset in json_data:
        if dataset["id"] == "":
            area_list.append(dataset["label"])
    return area_list

def count_ligand_name2(json_data):
    json_data = get_json_from_file("./data/ligand.json")
    ligand_name_list = []
    for dataset in json_data:
        if dataset["id"] == "":
            ligand_name_list.append(dataset["label"])
    return ligand_name_list

def count_gly_seq2(json_data):
    json_data = get_json_from_file("./data/structure.json")
    structure_list = []
    for dataset in json_data:
        try:
            a = dataset["glytoucanid"]
            structure_list.append(dataset["glytoucanid"])
        except:
            pass
    return structure_list


if __name__ == "__main__":
    print()
    json_data = get_json_from_file("./pacdb.json")
    sci_name_list = count_sci_name(json_data)
    ligand_name_list = count_ligand_name(json_data)
    target_label_list = count_target_label(json_data)
    gly_seq_list = count_gly_seq(json_data)
    pubmed_id_list = count_pubmed_id(json_data)

