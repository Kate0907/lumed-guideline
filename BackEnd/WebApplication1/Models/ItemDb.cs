using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace Guideline.Models
{
  public class ItemDb
  {
    public static List<Item> ITEMS { get; set; } = new List<Item>
        {
            new Item { id = 0, name = "Cinderella", childrenIds = new List<int>{20,21}, type = ItemType.Link},
            new Item { id = 1, name = "Beauty and the Beast",childrenIds = new List<int>{22}, type = ItemType.Link},
            new Item { id = 2, name = "Little Red Riding Hood", childrenIds = new List<int>{22}, type = ItemType.Link},
            new Item { id = 3, name = "Snow White and the Seven Dwarfs", childrenIds = new List<int>{23}, type = ItemType.Link},
            new Item { id = 4, name = "Sleeping Beauty", childrenIds = new List<int>{20}, type = ItemType.Link},
            new Item { id = 5, name = "Puss in Boots", childrenIds = new List<int>{20}, type = ItemType.Link},
            new Item { id = 6, name = "Rapunzel",childrenIds = new List<int>{25}, type = ItemType.Link},
            new Item { id = 7, name = "The Ugly Duckling ", childrenIds = new List<int>{25}, type = ItemType.Link},
            new Item { id = 8, name = "The Little Match Girl ", childrenIds = new List<int>{26}, type = ItemType.Link},
            new Item { id = 9, name = "The Princess and the Pea ", childrenIds = new List<int>{26}, type = ItemType.Link},
            new Item { id = 10, name = "The Emperor's New Clothes ", childrenIds = new List<int>{26}, type = ItemType.Link},
            new Item { id = 11, name = "The Little Mermaid ",childrenIds = new List<int>{27,28,29,30}, type = ItemType.Link},
            new Item { id = 12, name = "The Fox and The Hound ",childrenIds = new List<int>{}, type = ItemType.Link},
            new Item { id = 13, name = "Tom Thumb ",childrenIds = new List<int>{}, type = ItemType.Link},
            new Item { id = 14, name = "Test", childrenIds = null, type = ItemType.Link},
            new Item { id = 15, name = "Alice in Wonderland", childrenIds = new List<int>{26}, type = ItemType.Link},
            new Item { id = 16, name = "Hansel and Gretel ", childrenIds = new List<int>{25}, type = ItemType.Link},
            new Item { id = 17, name = "Rumpelstiltskin ", childrenIds = new List<int>{}, type = ItemType.Link},
            new Item { id = 18, name = "The Frog Prince ", childrenIds = new List<int>{}, type = ItemType.Link},
            new Item { id = 19, name = "The Butterfly", childrenIds = new List<int>{22}, type = ItemType.Link},

            new Item { id = 20, name = "Key Messages", childrenIds = new List<int> {40,41,42,43}, type = ItemType.Link },
            new Item { id = 21, name = "Type of Reaction to Penicillin",childrenIds = new List<int>{16,17,18,19,40,44}, type = ItemType.Link},
            new Item { id = 22, name = "Key Messages",childrenIds = new List<int> {11,12,13,14,45,46}, type = ItemType.Link},
            new Item { id = 23, name = "Key Messages", childrenIds = new List<int> {10,11,47}, type = ItemType.Link},
            new Item { id = 24, name = "Test",childrenIds = null, type = ItemType.Link},
            new Item { id = 25, name = "Management",childrenIds = new List<int>{13,15,49}, type = ItemType.Link},
            new Item { id = 26, name = "Proceed With Administering", childrenIds = new List<int> {16,50}, type = ItemType.Link },
            new Item { id = 27, name = "Most likely organisms",childrenIds = new List<int> {11,12,13,44,45,48}, type = ItemType.Link},
            new Item { id = 28, name = "IV", childrenIds = new List<int>{17,15,46}, type = ItemType.Link},
            new Item { id = 29, name = "Severe Penicillin Allergy",childrenIds = new List<int>{17,15,42,49}, type = ItemType.Link},
            new Item { id = 30, name = "Oral Stepdown",childrenIds = new List<int> {17,18,19,50}, type = ItemType.Link},

            new Item { id = 40, name = "Princess And The Pea – This fairy tale by Hans Christian Andersen, deals with a prince who is in search of a princess and how he gets to meet her.", type = ItemType.Message},
            new Item { id = 41, name = "A City Rat And A Village Rat – This story draws a parallel between the peaceful nature of living in villages versus the stressful nature of city life with rats as central characters. By observing the portrayals of two different lifestyles, children can start to understand about the real world.", type = ItemType.Message},
            new Item { id = 42, name = "Anne Frank – Venture into this sad yet inspiring diary of Anne Frank, a jewish victim of the Holocaust in Germany, as she explains her struggles during the Second World War. This will show children how traumatising war can be and why they must strive towards world peace.", type = ItemType.Message},
            new Item { id = 43, name = "The Boy Who Cried Wolf – This story proves that nobody will believe a liar, even when he speaks the truth. The main plot is centered around how the habit of lying affects a shepherd boy.", type = ItemType.Message},
            new Item { id = 44, name = "The Greedy Crocodile – Based on the theme of greed, this story describes an encounter involving a boy, a crocodile, and a rabbit. This tale teaches children about the essence of the proverb – “a bird in hand is worth two in a bush”", type = ItemType.Message},
            new Item { id = 45, name = "The Honest Woodcutter – This tale is based on the moral “Honesty is the best policy” and involves a poor woodcutter who loses his axe in a river. It shows children how they will get appreciated and rewarded if they live with honesty.", type = ItemType.Message},
            new Item { id = 46, name = "The Ant And The Grasshopper – This story is based on the concept of working hard in the present for a prosperous future and it features a hardworking ant and a lazy grasshopper. Through this tale, children will understand the need, importance and benefits of hard work.", type = ItemType.Message},
            new Item { id = 47, name = "The Golden Goose – This story is about a farmer who had a goose that was laying one golden egg every day. As the story goes on, it focuses on the themes of greed and how it can ruin anyone’s life.", type = ItemType.Message},
            new Item { id = 48, name = "The Ugly Duckling – This tale deals with the concept of apperance, and emphazizes on the fact that beauty does not mean superority. It portrays the struggles of an ugly duckling and the challenges faced by it due to its appearance.", type = ItemType.Message},
            new Item { id = 49, name = "Lion And The Mouse – This story explains the proverb “Small acts of kindness will be rewarded greatly” and how anyone regardless of their size and appearance, can make a major impact in certain situations. This tale can teach your child to appreciate others and create a helping tendency in their minds.", type = ItemType.Message},
            new Item { id = 50, name = "Hare And The Tortoise – Everyone is aware about this story where the hare is defeated by the tortoise in a race proving the proverb “Slow and steady wins the race”. But the story doesn’t end there as they eventually have another race! And it consists of a number of morals your child should learn about.", type = ItemType.Message},

            new Item { id = 51, name = "Who told you that you have a penicillin allergy(more than one may apply)?", type = ItemType.Message},
            new Item { id = 52, name = "Have you ever had a penicillin allergy skin test?", type = ItemType.Message},
            new Item { id = 53, name = "If YES to #2, the test result was:", type = ItemType.Message},
            new Item { id = 54, name = "When did you last receive penicillin??", type = ItemType.Message},
            new Item { id = 55, name = "When was your last allergic reaction to pencillin?", type = ItemType.Message},

            new Item { id = 61, name = "Stories for 0-2 years", childrenIds = new List<int> {0,1,100} , type = ItemType.Group},
            new Item { id = 62, name = "Stories for 3-6 years", childrenIds = new List<int>{2,3}, type = ItemType.Group},
            new Item { id = 63, name = "Stories for 7-10 years", childrenIds = new List<int>{4,5,6}, type = ItemType.Group},
            new Item { id = 64, name = "Stories for 11-16 years", childrenIds = new List<int>{7,8,9}, type = ItemType.Group},
            new Item { id = 65, name = "test", childrenIds = null,type = ItemType.Group},

            new Item { id = 70, name = "Question 1", childrenIds = new List<int> {51,89,90,91,92,82,93,94} , type = ItemType.Question},
            new Item { id = 71, name = "Question 2", childrenIds = new List<int>{52,80,81}, type = ItemType.Question},
            new Item { id = 72, name = "Question 3", childrenIds = new List<int>{53,83,84,82}, type = ItemType.Question},
            new Item { id = 73, name = "Question 4", childrenIds = new List<int>{54,85,86,87,88,82}, type = ItemType.Question},
            new Item { id = 74, name = "Question 5", childrenIds = new List<int>{55,85,86,87,88,82,95},type = ItemType.Question},

            new Item { id = 80, name = "Yes", type = ItemType.Checkbox, isChecked = true},
            new Item { id = 81, name = "No", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 82, name = "I don't know", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 83, name = "Positive", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 84, name = "Negative", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 85, name = "Never", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 86, name = "> 10 years ago", type = ItemType.Checkbox, isChecked = true},
            new Item { id = 87, name = "1-10 years ago", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 88, name = "Days to months ago", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 89, name = "Parents or relatives", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 90, name = "Physician", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 91, name = "Nurse", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 92, name = "Pharmacist", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 93, name = "No one told me", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 94, name = "I know I have an allergy", type = ItemType.Checkbox, isChecked = false},
            new Item { id = 95, name = "Rash", type = ItemType.Checkbox, isChecked = false},

            new Item { id = 100, name = "Beauty and the Beast Questionnaire", childrenIds = new List<int>{70,71,72,73,74}, type = ItemType.Questionnaire},

    };

    public static void Serialize()
    {
      string jsonResult = JsonConvert.SerializeObject(ITEMS, Formatting.Indented);
      File.WriteAllText(@"c:\Source\guideline.json", jsonResult);
    }

    public static void Deserialize()
    {
       DeItems = JsonConvert.DeserializeObject<List<Item>>(File.ReadAllText(@"c:\Source\guideline.json"));
    }
    public static List<Item> DeItems; 
    public static int LastId = 101;
  }
}


