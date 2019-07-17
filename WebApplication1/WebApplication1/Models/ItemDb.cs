using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
            new Item { id = 21, name = "Type of Reaction to Penicillin",childrenIds = new List<int>{6,7,8,9,10,44}, type = ItemType.Link},
            new Item { id = 22, name = "Key Messages",childrenIds = new List<int> {11,12,13,14,45,46}, type = ItemType.Link},
            new Item { id = 23, name = "Key Messages", childrenIds = new List<int> {47}, type = ItemType.Link},
            new Item { id = 24, name = "Test",childrenIds = null, type = ItemType.Link},
            new Item { id = 25, name = "Management",childrenIds = new List<int>{15,49}, type = ItemType.Link},
            new Item { id = 26, name = "Proceed With Administering", childrenIds = new List<int> {16,50}, type = ItemType.Link },
            new Item { id = 27, name = "Most likely organisms",childrenIds = new List<int> {20,21,22,44,45,48}, type = ItemType.Link},
            new Item { id = 28, name = "IV", childrenIds = new List<int>{17,15}, type = ItemType.Link},
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

            new Item { id = 61, name = "Stories for 0-2 years", childrenIds = new List<int> {0} , type = ItemType.Link},
            new Item { id = 62, name = "Stories for 3-6 years", childrenIds = new List<int>{1}, type = ItemType.Link},
            new Item { id = 63, name = "Stories for 7-10 years", childrenIds = new List<int>{2}, type = ItemType.Link},
            new Item { id = 64, name = "Stories for 11-16 years", childrenIds = new List<int>{3, 4, 5}, type = ItemType.Link},
            new Item { id = 65, name = "test", childrenIds = null}
    };

    public static int LastId = 70;
  }
}
