using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
    public class MessageDb
    {
        public static List<Message> MESSAGES { get; set; } = new List<Message>
        {
            new Message { id = 0, content = "Princess And The Pea – This fairy tale by Hans Christian Andersen, deals with a prince who is in search of a princess and how he gets to meet her."},
            new Message { id = 1, content = "A City Rat And A Village Rat – This story draws a parallel between the peaceful nature of living in villages versus the stressful nature of city life with rats as central characters. By observing the portrayals of two different lifestyles, children can start to understand about the real world."},
            new Message { id = 2, content = "Anne Frank – Venture into this sad yet inspiring diary of Anne Frank, a jewish victim of the Holocaust in Germany, as she explains her struggles during the Second World War. This will show children how traumatising war can be and why they must strive towards world peace."},
            new Message { id = 3, content = "The Boy Who Cried Wolf – This story proves that nobody will believe a liar, even when he speaks the truth. The main plot is centered around how the habit of lying affects a shepherd boy."},
            new Message { id = 4, content = "The Greedy Crocodile – Based on the theme of greed, this story describes an encounter involving a boy, a crocodile, and a rabbit. This tale teaches children about the essence of the proverb – “a bird in hand is worth two in a bush”"},
            new Message { id = 5, content = "The Honest Woodcutter – This tale is based on the moral “Honesty is the best policy” and involves a poor woodcutter who loses his axe in a river. It shows children how they will get appreciated and rewarded if they live with honesty."},
            new Message { id = 6, content = "The Ant And The Grasshopper – This story is based on the concept of working hard in the present for a prosperous future and it features a hardworking ant and a lazy grasshopper. Through this tale, children will understand the need, importance and benefits of hard work."},
            new Message { id = 7, content = "The Golden Goose – This story is about a farmer who had a goose that was laying one golden egg every day. As the story goes on, it focuses on the themes of greed and how it can ruin anyone’s life."},
            new Message { id = 8, content = "The Ugly Duckling – This tale deals with the concept of apperance, and emphazizes on the fact that beauty does not mean superority. It portrays the struggles of an ugly duckling and the challenges faced by it due to its appearance."},
            new Message { id = 9, content = "Lion And The Mouse – This story explains the proverb “Small acts of kindness will be rewarded greatly” and how anyone regardless of their size and appearance, can make a major impact in certain situations. This tale can teach your child to appreciate others and create a helping tendency in their minds."},
            new Message { id = 10, content = "Hare And The Tortoise – Everyone is aware about this story where the hare is defeated by the tortoise in a race proving the proverb “Slow and steady wins the race”. But the story doesn’t end there as they eventually have another race! And it consists of a number of morals your child should learn about."},
        };

        public static int LastId = 11;
    }
}
